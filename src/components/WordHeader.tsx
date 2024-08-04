import React from 'react';
import {View} from 'react-native';
import {T} from './T.tsx';
import {ScaledSheet} from 'react-native-size-matters';

interface WordHeaderProps {
  word: string;
  wordMean?: string;
  phonetic?: string;
  badgeColor?: string;
  backgroundColor?: string;
  wordColor?: string;
}

export const WordHeader: React.FC<WordHeaderProps> = ({
  word,
  wordMean,
  phonetic,
  badgeColor,
  backgroundColor,
  wordColor,
}) => {
  const color = backgroundColor ?? '#7B0F30';
  return (
    <View style={[styles.wordContainer, {backgroundColor: color}]}>
      {wordMean && (
        <T
          text={wordMean}
          color={'#D8D8D8'}
          size={12}
          style={styles.wordDescriptionText}
        />
      )}
      {phonetic && <T text={phonetic} color={'#CCCCCC'} size={12} />}
      <View style={styles.badgeWordContainer}>
        {badgeColor && (
          <View
            style={[
              {
                backgroundColor: badgeColor,
              },
              styles.wordBadge,
            ]}
          />
        )}
        <T
          style={{color: wordColor}}
          size={26}
          text={word.toUpperCase()}
          color={'#F4F4F4'}
          weight={'700'}
        />
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  wordContainer: {
    gap: '12@s',
    padding: '20@s',
    width: '100%',
  },
  badgeWordContainer: {
    flexDirection: 'row',
    gap: '4@s',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  wordBadge: {
    borderColor: 'white',
    width: 12,
    height: 38,
    borderRadius: 8,
    borderWidth: 2,
    position: 'absolute',
    left: '-16@s',
  },
  wordDescriptionText: {
    marginBottom: '16@s',
  },
});
