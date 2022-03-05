import images from './imageSources';

//screens
import HomeScreen from '../screens/HomeScreen';
import OffersScreen from '../screens/OffersScreen';
import FavoritesScreen from '../components/pages/SwapPage';

//tab names
const homeName = 'Feed';
const offersName = 'Offers';
const favoritesName = 'Favorites';
const wardrobeName = 'Wardrobe';
const profileName = 'Profile';

export const tabDetails = [
  {
    key: '0',
    tab: homeName,
    comp: HomeScreen,
    icon1: images.icons.icn8,
    icon2: images.icons.icn9,
  },
  {
    key: '1',
    tab: offersName,
    comp: OffersScreen,
    icon1: images.icons.icn4,
    icon2: images.icons.icn5,
  },
  {
    key: '2',
    tab: favoritesName,
    comp: FavoritesScreen,
    icon1: images.icons.icn14,
    icon2: images.icons.icn15,
  },
  {
    key: '3',
    tab: wardrobeName,
    comp: OffersScreen,
    icon1: images.icons.icn12,
    icon2: images.icons.icn13,
  },
  {
    key: '4',
    tab: profileName,
    comp: OffersScreen,
    icon1: images.icons.icn16,
    icon2: images.icons.icn17,
  },
];