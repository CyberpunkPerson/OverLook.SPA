import { Model } from "vue-mc";

export default class UserProfile extends Model {
    defaults() {
        return {
            profileId: null,
            token: '',
            username: '',
            authorities: [],
            accountNonExpired: false,
            accountNonLocked: false,
            credentialsNonExpired: false,
            enabled: false
        }
    }

    mutations() {
        return {
            profileId: (id) => String(id) || null,
            token: String,
            username: String,
            authorities: Array,
            accountNonExpired: Boolean,
            accountNonLocked: Boolean,
            credentialsNonExpired: Boolean,
            enabled: Boolean
        }
    }

}