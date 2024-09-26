import { useDispatch } from 'react-redux'
import { rdx_set_show_modal } from '../redux/settingSlice'

import Login from '../components/auth/Login'
import Register from '../components/auth/Register'


const Selection = ({ modal }) => {
    switch (modal) {
        case 'login':
            return <Login />

        case 'register':
            return <Register />
    }
}

const Modals = ({ modal }) => {

    const dispatch = useDispatch();

    if (!modal) return

    return (
        <div className="fixed bg-gray-900/90 top-0 left-0 right-0 bottom-0 z-50 flex justify-center pt-12">
            <div onClick={() => dispatch(rdx_set_show_modal(null))} className=' absolute top-0 left-0 right-0 bottom-0'></div>
            <div className="bg-white shadow-md border py-2 px-6 w-11/12 max-w-xl space-y-4 md:space-y-6 sm:p-8 overflow-auto z-50">
                <Selection modal={modal} />
            </div>
        </div>
    )



}

export default Modals;