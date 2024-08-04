import React from 'react';
import {View, ViewStyle, StyleProp, Text} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {T} from './T.tsx';

interface ListHeaderProps {
  listName: string;
  listNameColor?: string;
  backgroundColor?: string;
  listDescription?: string;
  listDescriptionColor?: string;
  wordCount?: number;
}

export const ListHeader: React.FC<ListHeaderProps> = ({
  listName,
  listNameColor,
  backgroundColor,
  listDescription,
  listDescriptionColor,
  wordCount,
}) => {
  const color = backgroundColor ?? '#D87B0E';
  return (
    <View style={[styles.listContainer, {backgroundColor: color}]}>
      {wordCount !== undefined && (
        <T
          text={`Count : ${wordCount}`}
          size={10}
          color={'#F4F4F4'}
          style={styles.countText}
        />
      )}
      <T
        size={20}
        text={listName.toUpperCase()}
        weight={'700'}
        color={listNameColor ?? '#F4F4F4'}
      />
      {listDescription && (
        <T
          text={listDescription}
          color={listDescriptionColor || 'white'}
          size={12}
        />
      )}
    </View>
  );
};

const styles = ScaledSheet.create({
  listContainer: {padding: '12@s', gap: '4@s', width: '100%'},
  countText: {paddingBottom: '8@s'},
});
