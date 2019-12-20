import { Collection } from 'vue-mc';
import UserDetails from "@model/userdetails"

export default class UserDetailsList extends Collection {
    model() {
        return UserDetails;
    }
    defaults() {
        return {
            orderBy: 'name',
        }
    }
}