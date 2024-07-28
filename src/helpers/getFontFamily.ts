export const getFontFamily = (weight?: '400' | '500' | '600' | '700') => {
  switch (weight) {
    case '400':
      return 'Quicksand_Regular';
    case '500':
      return 'Quicksand_Medium';
    case '600':
      return 'Quicksand_SemiBold';
    case '700':
      return 'Quicksand_Bold';
    default:
      return 'Quicksand_Regular';
  }
};
