import { Model } from "vue-mc";

export default class UserProfile extends Model {
    data() {
        return {
            id: null,
            token: '',
            username: '',
            roles: []
        }
    }

}