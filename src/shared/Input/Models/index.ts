import { KeyboardTypeOptions, NativeSyntheticEvent, TextInputSubmitEditingEventData } from "react-native";

export interface IInput {
	placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  value: string;
  onChangeText: (id: string) => void;
  onSubmitEditing?: ((e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void) | undefined;
}