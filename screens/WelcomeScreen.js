import {
    Dimensions,
    Text,
    View,
    Image,
    TouchableOpacity,
    SafeAreaView
} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import IMAGES from '../assets/images';
import Carousel, { Pagination } from 'react-native-snap-carousel-new';
import { PureComponent, useRef, useState } from 'react';
import Styles from '../constants/Styles';

class CarouselComponent extends PureComponent {
    render() {
        return (
            <View >
                <Image style={Styles.carouselImage} source={this.props.item.image} />
                <Text style={Styles.carouselText} adjustsFontSizeToFit={true} numberOfLines={2}>{this.props.item.title}</Text>
            </View>
        );
    }
}

export default function WelcomeScreen({ navigation }) {
    const [activeDotIndex, setActiveDotIndex] = useState(0);

    const _carousel = useRef();

    const data = [
        { id: 1, title: 'Search millions of flashcard sets.', image: IMAGES.PIC1 },
        { id: 2, title: 'Learn in four different ways.', image: IMAGES.PIC2 },
        { id: 3, title: 'Customize flashcards to your exact needs.', image: IMAGES.PIC3 },
        { id: 4, title: 'Over 90% of students who use BrainBuzz report receiving higher marks.', image: IMAGES.PIC4 },
    ];

    const renderItem = ({ item, index }) => {
        return <CarouselComponent item={item} />;
    };

    return (
        <SafeAreaView style={Styles.container}>
            <View style={Styles.header}>
                <Text style={Styles.headerText}>BrainBuzz</Text>
                <Ionicons name='search-outline' size={30} color='#666' />
            </View>
            <View style={Styles.carouselContainer}>
                <Carousel
                    ref={_carousel}
                    data={data}
                    renderItem={renderItem}
                    sliderWidth={Dimensions.get('window').width - 20}
                    itemWidth={Dimensions.get('window').width - 20}
                    onSnapToItem={(index) => setActiveDotIndex(index)}
                    loop={true}
                    autoplay={true}
                    enableMomentum={false}
                    lockScrollWhileSnapping={true}
                />
                <View style={{ marginTop: 30 }}>
                    <Pagination
                        carouselRef={_carousel}
                        activeDotIndex={activeDotIndex}
                        dotsLength={data.length}
                        tappableDots={true}
                        dotColor='gray'
                        inactiveDotColor='gray'
                        inactiveDotScale={1}
                    />
                </View>
            </View>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('SignUpScreen');
                }}
            >
                <View style={Styles.signupButton}>
                    <Text style={Styles.signupText}>Sign up for free</Text>
                </View>
            </TouchableOpacity>
            <View style={Styles.loginButton}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('SignInScreen');
                }}>
                    <Text style={Styles.loginText}>Or log in</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
