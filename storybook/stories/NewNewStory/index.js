import React from 'react';
import {ScrollView, Text} from 'react-native';
import {storiesOf} from '@storybook/react-native';

// I import the component I want to display here
const FirstStory = () => (
  <ScrollView style={{backgroundColor:'red'}}>
    <Text numberOfLines={3} style={{fontSize: 100, fontWeight: 'bold', color: 'yellow' }}>New New Story</Text>
  </ScrollView>
);

const NewNewStory = storiesOf('NewNewStory', module);

// then I add a story with the name default view, I can add multiple stories to button stories
NewNewStory.add('Hello World', () => <FirstStory/>);
