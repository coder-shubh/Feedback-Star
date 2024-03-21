// FeedBackStar.tsx
import { StyleSheet } from 'react-native';
import { useCommonImports } from '../imports/index';

interface FeedBackStarProps {
    initialRating?: number;
    onStarPress?: (rating: number) => void;
    starSize?: number;
    selectedColor?: string;
    unselectedColor?: string;
}

const FeedBackStar: React.FC<FeedBackStarProps> = ({
    initialRating = 0,
    onStarPress,
    starSize = 52,
    selectedColor = '#ffb300',
    unselectedColor = '#000'
}) => {
    const { useState, View, TouchableOpacity, StyleSheet,MaterialIcons } = useCommonImports();
    const [starRating, setStarRating] = useState<number>(initialRating);

    const handleStarPress = (rating: number) => {
        setStarRating(rating);
        if (onStarPress) {
            onStarPress(rating);
        }
    };

    const renderStar = (index: number) => {
        const iconName = starRating >= index ? 'star' : 'staro';
        const starStyle = starRating >= index ? styles.starSelected : styles.starUnselected;

        return (
            <TouchableOpacity key={index} onPress={() => handleStarPress(index)}>
                {/* Assuming MaterialIcons is imported elsewhere */}
                <MaterialIcons name={iconName} size={starSize} style={[starStyle, { color: starRating >= index ? selectedColor : unselectedColor }]} />
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
