import React, { useEffect, useRef, useState } from "react";
import { View, Text, SafeAreaView, FlatList, TextInput } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { IToDoItem } from "../../types/interface";
import ToDoItem from "../../components/ToDoItem";
import Button from "../../components/Button";
import { asyncStoragekeys } from "../../types/asyncStoragekeys";
import ListEmpt from "../../components/ListEmpt";
import { Styles } from "./styles";

const Home = () => {
  // Ref to FlatList for scrolling
  const flatListRef = useRef(null);

  // State for input text, selected todo index, and todos list
  const [text, setText] = useState<string>("");
  const [selectedTodoIndex, setSelectedTodoIndex] = useState<number | null>(
    null
  );
  const [todos, setTodos] = useState<IToDoItem[]>([]);

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
  const storeTodos = async (todos: IToDoItem[]) => {
    try {
      await AsyncStorage.setItem(asyncStoragekeys.Todos, JSON.stringify(todos));
    } catch (e) {}
  };

  // Render each todo item
  const renderItem = ({ item, index }: { item: IToDoItem; index: number }) => (
    <ToDoItem
      title={item.title}
      index={index}
      onPressRemove={onClickRemove}
      onPressTodo={onClickTodo}
    />
  );

  return (
    <SafeAreaView style={Styles.container}>
      {/* Header */}
      <Text style={Styles.headerText}>TODO:</Text>

      {/* List of todos */}
      <FlatList
        ref={flatListRef}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={Styles.flatListContent}
        data={todos}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
        ListEmptyComponent={<ListEmpt />}
      />

      {/* Input container */}
      <View style={Styles.inputContainer}>
        <TextInput
          style={Styles.input}
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
