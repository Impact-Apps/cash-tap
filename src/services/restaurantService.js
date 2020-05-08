const MODEL_PATH = '../models/'
const RestaurantModel =  require(MODEL_PATH + 'Restaurant');

const create = async restaurant => await RestaurantModel.create(restaurant);

const get = async filter => await RestaurantModel.find(filter)

const deleteRestaurant = async id => RestaurantModel.findByIdAndRemove(id)

const getAll =  async () => await RestaurantModel.find()

const updateRestaurant = async (id, update) => await RestaurantModel.findByIdAndUpdate(id, update);

const getOrCreate = async auth0Id => await RestaurantModel.collection.findOneAndUpdate(
    { auth0Id },
    {
        $setOnInsert: { auth0Id },
    },
    {
        returnOriginal: false,
        upsert: true,
        returnNewDocument: true,
    }
);

module.exports = {
    create,
    get,
    getAll,
    deleteRestaurant,
    getOrCreate,
    updateRestaurant,
}
