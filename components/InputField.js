import { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

export default function InputField({
  label,
  icon,
  inputType,
  keyboardType,
  fieldButtonLabel,
  fieldButtonFunction,
}) {
  const [focused, setFocused] = useState(false);
  return (
    <View
      style={[{
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        padding: 10,
        marginBottom: 25,
      },
      focused && {
        borderWidth: 2,
        borderBottomWidth: 2,
        borderColor: "#4caf50",
        shadowOffset: { width: 4, height: 10 },
        shadowColor: "#1F41BB",
        shadowOpacity: 0.2,
        shadowRadius: 10,
      }]}>
      {icon}
      {inputType == 'password' ? (
        <TextInput
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={label}
          keyboardType={keyboardType}
          secureTextEntry={true}
        />
      ) : (
        <TextInput
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={label}
          keyboardType={keyboardType}
        />
      )}
      <TouchableOpacity onPress={fieldButtonFunction}>
        <Text style={{ color: '#AD40AF', fontWeight: '700' }}>{fieldButtonLabel}</Text>
      </TouchableOpacity>
    </View>
  );
}
