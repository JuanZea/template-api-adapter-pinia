import { service } from '../../service';
import { TPersonCollection } from './ts';

export const getIndex = async (): Promise<TPersonCollection> => {
  const { data } = await service.get('people');
  return data;
};
