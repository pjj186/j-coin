import React, { useRef, useState } from "react";
import styled from "styled-components/native";

const Container = styled.View``;
const Text = styled.Text``;
const TextInput = styled.TextInput``;

const Join = () => {
  const passwordInput = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  const onSubmitEditing = () => {
    passwordInput.current.focus();
  };
  return (
    <Container>
      <TextInput
        placeholder="Email"
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
        value={email}
        returnKeyType="next"
        onChangeText={(text) => setEmail(text)}
        onSubmitEditing={onSubmitEditing}
      />
      <TextInput
        ref={passwordInput}
        placeholder="Password"
        secureTextEntry
        value={password}
        returnKeyType="done"
        onChangeText={(text) => setPassWord(text)}
      />
    </Container>
  );
};

export default Join;
