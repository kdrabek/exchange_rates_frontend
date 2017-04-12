import { LocalStorageMock} from '../localStorage';

describe('LocalStorageMock component', () => {

  it('creates empty storage', () => {
    const storage = new LocalStorageMock();

    expect(storage.store).toEqual({});
  });

  it('lets to store items', () => {
    const storage = new LocalStorageMock();

    expect(storage.getItem('test_key')).toEqual(undefined);
    storage.setItem('test_key', 'test_value');
    expect(storage.getItem('test_key')).toEqual('test_value');
  });

  it('lets to retrieve items', () => {
    const storage = new LocalStorageMock();
    storage.setItem('test_key', 'test_value');

    expect(storage.getItem('test_key')).toEqual('test_value');
  });


  it('lets to remove items', () => {
    const storage = new LocalStorageMock();
    storage.setItem('test_key', 'test_value');

    expect(storage.getItem('test_key')).toEqual('test_value');
    storage.removeItem('test_key');
    expect(storage.getItem('test_key')).toEqual(undefined);

  });

});
