import { createSlice, createAsyncThunk, PayloadAction, createSelector } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../../../store';

interface Equipment {
    id: number;
    title: {
        fr: string;
    };
    level: number;
    rarity: string;
    picture: number | null;
    typeItem: string;
    effects: { [key: string]: number } | null;
    description: { [key: string]: string } | null;
}

interface Sublimation {
    id: number;
    title: {
        fr: string;
    };
    type: string;
    rarity: string;
}

interface EquipmentState {
    equipments: Equipment[];
    commonSublimations: Sublimation[];
    rareSublimations: Sublimation[];
    loading: boolean;
    error: string | null;
}

const initialState: EquipmentState = {
    equipments: [],
    commonSublimations: [],
    rareSublimations: [],
    loading: false,
    error: null,
};

export const fetchEquipments = createAsyncThunk<Equipment[]>(
    'equipments/fetchEquipments',
    async () => {
        const response = await axios.get('/api/equipments');
        return response.data.map((equipment: any) => ({
            id: equipment.id,
            level: equipment.level,
            rarity: equipment.rarity, 
            picture: equipment.picture, 
            title: equipment.title, 
            typeItem: equipment.typeItem,             
            effects: equipment.effects,  
            description: equipment.description,  
        }));
    }
);

export const fetchSublimations = createAsyncThunk<Sublimation[]>(
    'sublimations/fetchSublimations',
    async () => {
        const response = await axios.get('/api/sublimations');
        return response.data;
    }
);

const equipmentSlice = createSlice({
    name: 'equipment',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchEquipments.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchEquipments.fulfilled, (state, action: PayloadAction<Equipment[]>) => {
                state.loading = false;
                state.equipments = action.payload;
            })
            .addCase(fetchEquipments.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? 'Erreur lors de la récupération des équipements';
            });

        builder
            .addCase(fetchSublimations.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchSublimations.fulfilled, (state, action: PayloadAction<Sublimation[]>) => {
                state.loading = false;
                const commonSublimations: Sublimation[] = [];
                const rareSublimations: Sublimation[] = [];

                action.payload.forEach((sublimation) => {
                    if (sublimation.type === 'common') {
                        commonSublimations.push(sublimation);
                    } else {
                        rareSublimations.push(sublimation);
                    }
                });

                state.commonSublimations = commonSublimations;
                state.rareSublimations = rareSublimations;
            })
            .addCase(fetchSublimations.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? 'Erreur lors de la récupération des sublimations';
            });
    },
});

export default equipmentSlice.reducer;

export const selectEquipments = (state: RootState) => state.equipment.equipments;

// export const selectCommonSublimations = createSelector(
//     (state: RootState) => state.equipment.commonSublimations,
//     (commonSublimations) => commonSublimations
// );

// export const selectRareSublimations = createSelector(
//     (state: RootState) => state.equipment.rareSublimations,
//     (rareSublimations) => rareSublimations
// );

// export const selectLoadingState = createSelector(
//     (state: RootState) => state.equipment.loading,
//     (loading) => loading
// );

// export const selectErrorState = createSelector(
//     (state: RootState) => state.equipment.error,
//     (error) => error
// );