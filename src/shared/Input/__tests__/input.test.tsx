import { render } from '@testing-library/react-native';
import Input from '..';

describe('input', () => {
  describe('rating was passed', () => {
    it('show de icon', () => {
      const { getByTestId } = render(<Input
        placeholder={'input'}
        keyboardType={'default'}
        value={'value'}
        onChangeText={(id: string) => id}
        onSubmitEditing={(id: any) => id}
      />);

      expect(getByTestId('iconSearch')).toBeTruthy();
    })
    it('show de input', () => {
      const { getByTestId } = render(<Input
        placeholder={'input'}
        keyboardType={'default'}
        value={'value'}
        onChangeText={(id: string) => id}
        onSubmitEditing={(id: any) => id}
      />);

      expect(getByTestId('input')).toBeTruthy();
    })
  });
});