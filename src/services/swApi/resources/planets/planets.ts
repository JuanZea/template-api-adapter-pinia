import { service } from '../../service';
import { TPlanetCollection } from './ts';

export const getIndex = async (): Promise<TPlanetCollection> => {
  const { data } = await service.get('planets');
  return data;
};
