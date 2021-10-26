/// <reference types="@types/google.maps" />
import { User } from './User'
import { CustomMap } from './CustomMap'

const user = new User();
const customMap = new CustomMap('map')

customMap.addUserMarker(user)