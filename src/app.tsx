import { Header } from "./components/header";
import { UserList } from "./components/user-list";

export function App() {
  return (
    <div className="max-w-[1216px] mx-auto py-5">
      <Header/>
      <UserList/>
    </div>
  )
}

