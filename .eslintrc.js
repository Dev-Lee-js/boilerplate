 module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "eslint:recommended", "prettier",
        "plugin:@typescript-eslint/recommended",
         // typescript 표준 규칙 모음
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
        // import 관련 규칙 모음

        "plugin:prettier/recommended",
        "prettier/@typescript-eslint",
        "prettier/react",
         // prettier 관련 규칙 모음
    ],
    plugins: ['prettier'],
    parserOptions: {
        ecmaVersion: 2018,
        project: ["./tsconfig.json"],
        // tsconfig 파일의 경로를 참조 해줍니다. 
        // 기준은 root 입니다.
    },
    rules:{
        'prettier/prettier': [
          'error',
          {
            arrowParens: 'avoid',    // 화살표 함수 괄호 사용 방식
            bracketSpacing: true,    // 객체 리터럴의 괄호 사이에 공백 출력
            endOfLine: 'auto',        // 개행문자 CRLF/LF 자동 설정
            printWidth: 80,            // 줄바꿈 길이 설정
            semi: true,                // 명령문 끝에 세미콜론 추가
            singleQuote: true,        // 작은 따옴표 사용
            tabWidth: 2,            // 들여쓰기 공백 수 설정
            trailingComma: 'all',    // 후행 쉼표 추가
            useTabs: false,            // tab 대신 space 사용
          },
        ],
      },
};