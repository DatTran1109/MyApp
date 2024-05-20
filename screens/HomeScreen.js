import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import MainHeader from '../components/MainHeader';
import ScreenHeader from '../components/ScreenHeader';
import SectionHeader from '../components/SectionHeader';
import CardCarousel from '../components/CardCarousel';
import CardList from '../components/CardList';
import { colors } from '../constants/theme';
import { CARDS, TOP_CARDS } from '../data';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <MainHeader title="BrainBuzz" navigation={navigation} />
            <ScreenHeader mainTitle="Find Your" secondTitle="Flashcard" />
            <ScrollView showsVerticalScrollIndicator={false}>
                <CardCarousel list={TOP_CARDS} />
                <SectionHeader
                    title="Popular Flashcard"
                    buttonTitle="See All"
                    onPress={() => { }}
                />
                <CardList list={CARDS} />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.light,
        paddingTop: 20,
    },
});

export default HomeScreen;
