export default function TypescriptPage() {

    // 타입추론 : 처음에 들어간 값을 통해, 변수의 타입을 추론하게 한다. 
    let aaa = "냐옹냐옹"
    aaa = 3

    let bbb : string = "반갑습니다"
    bbb = 10

    // 타입 명시가 필요한 상황
    let ccc :string | number = 1000
    ccc = "1000원"

    // 숫자타입 
    let ddd : number = 10
    ddd = "철수"

    // 불린타입 
    let eee: boolean = true
    eee= false 
    eee = "false" //이건 true로 작동하게 됨
    
    // 배열타입 
    let fff : number[]  = [1, 2, 3, 4, 5]
    let ggg : string[] = ["철수" , "훈히"]
    let hhh : (string | number) []= ["철수", 123, "영희"] //타입을 추론해서 어떤 타입을 사용하는지 알아보기 

    // 객체 타입 
    const profile : IProfile = { 
        name : "철수",
        age: 8,
        school : '다람쥐 초등학교'
    }
    profile.name = "훈이" // 타입 추론으로 기존 key 값의 value를 바꾸는 것만 가능
    profile.age = "8살"
    profile.hobby = "수영" //객체에 key 추가도 안된다.

    //타입 만들기 
    interface IProfile {
        name : string
        age : number | string
        school : string
        hobby? : string //근데 결국에 hobby가 없으면 오류가 난다. / but 물음표를 붙이면 있어도 되고, 없어도 됨. 
    }

    // 함수타입 
    function add(num1 :number , num2 : number, unit : string) : string {    //매게변수 타입
        return num1 + num2 + unit //리턴 타입 
    }
    const result = add( 1000, 2000, "원") //결과의 리턴타입도 예측 가능

    const add2 = (num1 :number , num2 : number, unit : string) : string =>  {    
        return num1 + num2 + unit 
    }
    const result2 = add2( 1000, 3000, "달러")
    
    // any타입 
    let qqq : any = "철수"
    qqq =123 
    qqq = true //자바스크립트와 동일 

    return <>안녕</>
}