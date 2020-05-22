import {requestResponse} from '~/../config/axios.conf'

export const getUserInfo = () => requestResponse('get', '/anon/resource/user')

export const getVdCode = () => requestResponse('post', '/anon/getLoginQrCodeToken')

export const getLinkList = () => requestResponse('get', '/anon/getAllFriendShipLinkList?friendshipServiceKey=CIIP&belongLanguage=CHINESE&pageNumber=1&pageSize=15')
