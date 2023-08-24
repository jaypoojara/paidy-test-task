export interface IButton {
  title: string;
  onPress?: () => void;
  radius?: number;
}

export interface ITodoItem {
  title: string;
}

export interface ITodoComponent {
  title: string;
  index: number;
  onPressTodo?: (arg: number) => void;
  onPressRemove?: (arg: number) => void;
}
