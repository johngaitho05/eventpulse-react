import { Search, FilePenLine, User } from 'lucide-react';
import { PiMicrophoneStageLight } from 'react-icons/pi';
import { FaPeopleGroup } from 'react-icons/fa6';
import { LuCandlestickChart } from 'react-icons/lu';
import { LiaPeopleCarrySolid } from 'react-icons/lia';

export const links = [
    {
        name: 'find events',
        icon: Search,
    },
    {
        name: 'create events',
        icon: FilePenLine,
    },
    {
        name: 'login',
        icon: User,
    },
];

export const heros = [
    {
        name: 'Conference',
        icon: FaPeopleGroup,
    },
    {
        name: 'art exhibition',
        icon: LuCandlestickChart,
    },
    {
        name: 'live performance',
        icon: PiMicrophoneStageLight,
    },
    {
        name: 'meetup',
        icon: LiaPeopleCarrySolid,
    },
];
