import React from 'react';
import { View, TouchableOpacity, StyleSheet as RNStyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export function useCommonImports() {
    return {
        React,
        useState: React.useState,
        View,
        TouchableOpacity,
        StyleSheet: RNStyleSheet,
        MaterialIcons
    };
}


