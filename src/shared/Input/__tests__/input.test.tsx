import { render } from '@testing-library/react-native';
import Input from '..';

describe('input', () => {
  it('the component input rendered', () => {
    const { debug } = render(<Input
      placeholder={'placeholder'}
      keyboardType={'default'}
      value={'value'}
      onChangeText={(id: string) => id}
      onSubmitEditing={(id: any) => id}
    />);
    debug();
  });
});