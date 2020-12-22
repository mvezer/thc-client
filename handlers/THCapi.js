import axios from 'axios';
import { BASE_URL } from '../constants/urls';

const THC_API_BASE_URL = `${BASE_URL}/api`;

export const getCombos = async () => {
    let combos = null;

    try {
        combos = await axios.get(`${THC_API_BASE_URL}/combos`);
    } catch (error) {
        console.error(`could not load combos: ${error.message}`);
        return null;
    }

    if (combos.data.error) {
        console.error(`could not load combos: ${combos.data.error}`);
        return null;
    }

    return combos.data.data;
}

export const applyCombo = async (comboId) => {
    let result = null;
    try {
        result = await axios.put(`${THC_API_BASE_URL}/combos/${comboId}/apply`);
    } catch (error) {
        console.error(`could not apply combo (${comboId}) ${error.message}`);
        return false;
    }

    if (result.data.error) {
        console.error(`could not apply combo (${comboId}) ${result.data.error}`);
        return false;
    }

    return true;
}