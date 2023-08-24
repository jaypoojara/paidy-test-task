import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  FlatList,
  TextInput,
  StyleSheet,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ITodoItem } from "../types/interface";
import TodoItem from "../components/TodoItem";
import Button from "../components/Button";
import { colors } from "../types/colors";
import { asyncStoragekeys } from "../types/asyncStoragekeys";

const Home = () => {
  // Ref to FlatList for scrolling
  const flatListRef = useRef(null);

  // State for input text, selected todo index, and todos list
  const [text, setText] = useState<string>("");
  const [selectedTodoIndex, setSelectedTodoIndex] = useState<number | null>(
    null
  );
  const [todos, setTodos] = useState<ITodoItem[]>([]);

  useEffect(() => {
    // Load todos from AsyncStorage on component mount
    getTodos();
  }, []);

  // Retrieve todos from AsyncStorage
  const getTodos = async () => {
    try {
      const value = await AsyncStorage.getItem(asyncStoragekeys.Todos);
      if (value !== null) {
        setTodos(JSON.parse(value));
      }
    } catch (e) {}
  };

  // Add or update a todo item
  const onClickAddUpdate = () => {
    const updateTodos = todos;
    if (selectedTodoIndex !== null) {
      // Update existing todo
      updateTodos[selectedTodoIndex].title = text;
    } else {
      // Add new todo
      updateTodos.push({ title: text });
    }
    storeTodos(updateTodos);
    setTodos(updateTodos);
    setText("");
    setSelectedTodoIndex(null);

    // Scroll to the end of the list after updating
    setTimeout(() => {
      flatListRef.current.scrollToEnd();
    }, 100);
  };

  // Remove a todo item
  const onClickRemove = (index: number) => {
    const updateTodos = todos;
    updateTodos.splice(index, 1);
    storeTodos(updateTodos);
    setTodos([...updateTodos]);
    setSelectedTodoIndex(null);
    setText("");
  };

  // Click handler for selecting a todo
  const onClickTodo = (index: number) => {
    setText(todos[index].title);
    setSelectedTodoIndex(index);
  };

  // Store todos to AsyncStorage
  const storeTodos = async (todos: ITodoItem[]) => {
    try {
      await AsyncStorage.setItem(asyncStoragekeys.Todos, JSON.stringify(todos));
    } catch (e) {}
  };

  // Render each todo item
  const renderItem = ({ item, index }: { item: ITodoItem; index: number }) => (
    <TodoItem
      title={item.title}
      index={index}
      onPressRemove={onClickRemove}
      onPressTodo={onClickTodo}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Text style={styles.headerText}>TODO:</Text>

      {/* List of todos */}
      <FlatList
        ref={flatListRef}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
        data={todos}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
        ListEmptyComponent={
          // Empty container
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>Todos not found!</Text>
          </View>
        }
      />

      {/* Input container */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter here"
          value={text}
          onChangeText={setText}
        />
        {/* Button to add or update a todo */}
        <Button
          onPress={() => onClickAddUpdate()}
          title={selectedTodoIndex != null ? "UPDATE" : "ADD"}
          radius={15}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;

// Styles for the screen
const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 15,
    flex: 1,
    paddingBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 10,
  },
  flatListContent: {
    flexGrow: 1,
  },
  inputContainer: {
    marginVertical: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: colors.white,
    flexDirection: "row",
    borderRadius: 15,
  },
  input: {
    flex: 1,
    fontWeight: "500",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.lable,
  },
});
