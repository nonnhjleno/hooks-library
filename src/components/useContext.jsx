// ReactからcreateContextとuseStateをimport
import React, { createContext } from 'react'
import Context from './Context'

//createContextを使ってUserContextとHobbyContextを作成
export const UserContext = createContext()
export const HobbyContext = createContext()

function ContextFunc() {
  //useStateを使ってuserを作成
  const user = {
    name: 'セイラ',
    age: '17'
  }
  //useStateを使ってhobbyを作成
  const hobby = 'キャンプ'
  return (
    <div className='App'>
  {/* //userContext。Providerを作成、valueにはuserをセット */}
      <UserContext.Provider value={user}>
  {/* //HobbyContext.Providerを作成、valueにはhobbyをセット */}
        <HobbyContext.Provider value={hobby}>
          <Context />
        </HobbyContext.Provider>
      </UserContext.Provider>
    </div>
  )
}

export default ContextFunc;
