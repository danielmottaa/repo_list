import { useSelector } from 'react-redux';
import { IInfoReducerData } from '../store/ducks/info';

export const useUserSelector = () => {
    const auth = useSelector((state: {info: IInfoReducerData}) => state.info)
    return auth;
}
