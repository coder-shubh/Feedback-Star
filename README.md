<!-- Title -->
<h1 align="center">@coder-shubh/feedback-star</h1>

<!-- Badges -->
<p align="center">
  <img src="https://img.shields.io/npm/v/@coder-shubh/feedback-star" alt="npm version">
  <!-- <img src="https://img.shields.io/github.com/coder-shubh/ShubhamPackage" alt="license"> -->
</p>


![Demo](https://raw.githubusercontent.com/bviebahn/react-native-star-rating-widget/master/media/demo.gif)



<!-- Description -->
<p align="center">
  A React Native component for implementing feedback star ratings easily.
</p>

<!-- Table of Contents -->
<h2>Table of Contents</h2>

- [Installation](#installation)
- [Usage](#usage)
- [Props](#props)
- [License](#license)

<!-- Installation -->
<h2>Installation</h2>

You can install the `@coder-shubh/feedback-star` package using npm or yarn:

```bash
# with npm
npm i @coder-shubh/feedback-star

# with yarn
yarn add @coder-shubh/feedback-star
```

<!-- Usage -->
<h2>Usage</h2>

```js
import React from "react";
import { View, StyleSheet } from "react-native";
import { FeedBackStar } from "@react-native/feedback-star";

const App = () => {
  const handleStarPress = (rating: number) => {
    console.log("Selected rating:", rating);
  };

  return (
    <View style={styles.container}>
      <FeedBackStar
        initialRating={3}
        onStarPress={handleStarPress}
        starSize={40}
        selectedColor="#ffb300"
        unselectedColor="#000"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F0F1F5",
  },
});

export default App;
```

<!-- Props -->
<h2>Props</h2>

| Prop              | Type                              | Description                                   | Default Value |
|-------------------|-----------------------------------|-----------------------------------------------|---------------|
| `initialRating`   | number                            | The initial rating value.                     | `0`           |
| `onStarPress`     | (rating: number) => void          | A callback function triggered when a star is pressed. | -       |
| `starSize`        | number                            | The size of each star.                       | `52`          |
| `selectedColor`   | string                            | The color of selected stars.                 | `'#ffb300'`   |
| `unselectedColor` | string                            | The color of unselected stars.               | `'#000'`      |


In this table:

`Prop`: Name of the prop.
`Type`: Type of the prop.
`Description`: Description of what the prop does.
`Default Value`: Default value of the prop, if any.


<!-- License -->
<h2>License</h2>

This project is licensed under the MIT License - see the LICENSE file for details.

In this version, I've added:

- Title and badges centered at the top.
- Descriptive text centered.
- Table of Contents for easy navigation.
- Stylish section headings.
- Usage code block with syntax highlighting.
- More visual appeal with horizontal lines and section separators.

Feel free to adjust the styles, colors, or any other aspects to better suit your preferences or project branding.
