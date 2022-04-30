import Axios from 'axios';

interface Login {
    loginID: string,
    password: string,
    deviceID: null,
}

export default class MemberService {
    static async login(login: Login){
        try {
            const result = await Axios.post('http://localhost:4000/api/login',login)
            
            return {
                success: true,
                errorCode: 200,
                data: result.data,
                message: ''
            }

        } catch(e){
            let message
            switch(e.response.status){
                case 400:
                     message = '측정기 정보가 잘못되었습니다.'
                     break
                case 401:
                    message = "사용자 정보가 일치하지 않습니다."
                    break;
                case 402:
                    message = "해당 아이디는 허용되지 않습니다. 관리자에게 문의해주세요"
                    break;
                default:
                    message = '오류가 발생했습니다.'
            }

            return {
                success: false,
                errorCode: e.response.status,
                message: message
            }
        }
    }
}
