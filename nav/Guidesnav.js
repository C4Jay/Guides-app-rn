import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import GuidesScreen from '../screens/guidesScreen';
import SingleGuideScreen from '../screens/singleguideScreen';
import CreateGuideScreen from '../screens/createguideScreen';

const Guidesnav = createStackNavigator({
    Guides: GuidesScreen,
    Singleguide: SingleGuideScreen,
    Createguide: CreateGuideScreen
})

export default createAppContainer(Guidesnav);