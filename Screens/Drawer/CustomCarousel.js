import React from 'react';
import { FlatList, View, Dimensions } from 'react-native';

const CustomCarousel = ({ data, renderItem, loop, width, height, autoPlay, scrollAnimationDuration, onSnapToItem }) => {
  const renderItemWithStyle = ({ item, index }) => (
    <View style={{ width, height }}>
      {renderItem({ item, index })}
    </View>
  );

  return (
    <FlatList
      data={data}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      renderItem={renderItemWithStyle}
      keyExtractor={(item) => item.id.toString()}
      windowSize={21} // Add the windowSize prop here
      onScroll={(event) => {
        if (onSnapToItem) {
          const index = Math.round(event.nativeEvent.contentOffset.x / width);
          onSnapToItem(index);
        }
      }}
    />
  );
};

export default CustomCarousel;
