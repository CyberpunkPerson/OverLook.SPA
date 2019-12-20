import { Model } from "vue-mc";

export default class UserDetails extends Model {
    defaults() {
        return {
            userId: null,
            name: '',
            contactInfo: null
        }
    }

    mutations() {
        return {
            userId: (id) => String(id) || null,
            name: String,
            username: String,
            contactInfo: Object
        }
    }

}