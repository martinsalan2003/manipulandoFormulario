import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export default function IconeHome(){
    return(
        <Link href="/">
            <div className=" flex rounded-full bg-zinc-900 h-[50px] w-[50px] fixed right-4 bottom-4 justify-center items-center">
                 <FontAwesomeIcon icon={faHouse} className="text-white text-md" />
            </div>
        </Link>
    )
}