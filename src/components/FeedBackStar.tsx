// FeedBackStar.tsx
import React from 'react';
import { StyleSheet } from 'react-native';
import { useCommonImports } from '../imports/index';

interface FeedBackStarProps {
    initialRating?: number;
    onStarPress?: (rating: number) => void;
    starSize?: number;
    selectedColor?: string;
    unselectedColor?: string;
    halfStarColor?:string;
}

const FeedBackStar: React.FC<FeedBackStarProps> = ({
    initialRating = 0,
    onStarPress,
    starSize = 52,
    selectedColor = '#ffb300',
    unselectedColor = '#000',
    halfStarColor = '#ffb300'
}) => {
    const { useState, View, TouchableOpacity, StyleSheet,MaterialIcons } = useCommonImports();
    const [starRating, setStarRating] = useState<number>(initialRating);

    const handleStarPress = (rating: number) => {
        // Toggle half-star if already selected
        if (rating === starRating) {
            setStarRating(rating - 0.5);
        } else {
            setStarRating(rating);
        }

        if (onStarPress) {
            onStarPress(rating);
        }
    };

    const renderStar = (index: number) => {
        let iconName: string;
        let starStyle: any;

        if (starRating >= index) {
            iconName = 'star';
            starStyle = styles.starSelected;
        } else if (starRating + 0.5 === index) {
            iconName = 'star-half-full';
            starStyle = styles.starSelected;
        } else {
            iconName = 'star-outline';
            starStyle = styles.starUnselected;
        }

        return (
            <TouchableOpacity key={index} onPress={() => handleStarPress(index)}>
                {/* Assuming MaterialIcons is imported elsewhere */}
                <MaterialIcons name={iconName} size={starSize} style={[starStyle, { color: starRating >= index ? selectedColor : (index - 0.5 === starRating ? halfStarColor : unselectedColor) }]} />
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.stars}>
                {[...Array(5)].map((_, index) => renderStar(index + 1))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F0F1F5'
    },
    stars: {
        flexDirection: 'row',
    },
    starUnselected: {},
    starSelected: {},
});

export default FeedBackStar;
