import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import GuidesScreen from '../screens/guidesScreen';
import SingleGuideScreen from '../screens/singleguideScreen';

const Guidesnav = createStackNavigator({
    Guides: GuidesScreen,
    Singleguide: SingleGuideScreen,
})

export default createAppContainer(Guidesnav);