import { useState, useEffect } from 'react';
import { getUser } from '../../helpers/utils';
import { Card, Form, Upload } from 'antd';
import { Input } from 'antd';
import { BellOutlined } from '@ant-design/icons';
import { CalendarClock, CalendarFold, ListCollapse, Plus, UsersRound } from 'lucide-react';

const data = [
    {
        icon: CalendarFold,
        name: 'past events',
        color: 'primary',
        count: 4,
    },
    {
        icon: CalendarClock,
        name: 'Upcoming events',
        color: 'primary',
        count: 4,
    },
    {
        icon: ListCollapse,
        name: 'All events',
        color: 'primary',
        count: 4,
    },
    {
        icon: UsersRound,
        name: 'Registered Users',
        color: 'primary',
        count: 4,
    },
];

const { Search } = Input;

const Events = () => {
    const [user, setUser] = useState(getUser());
    const firstName = user && user.name ? user.name.split(' ')[0] : '';

    return (
        <div className="flex flex-col  gap-4">
            {/* managing */}
            <div>
                <h2 className="py-2 text-xl">Events you are managing</h2>
                <div className="flex justify-between">
                    {data.map((item) => (
                        <Card className="w-[250px] h-[100px]" key={item.name}>
                            <div className="flex justify-between">
                                <div>
                                    <item.icon
                                        className={`bg-${item.color}  text-white  p-2 rounded-[20px]`}
                                        size={55}
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <h2 className="font-bold text-2xl">{item.count}</h2>
                                    <p className="text-base capitalize text-gray-600">
                                        {item.name}
                                    </p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Registered */}
            <div>
                <h2 className="py-2 text-xl">Events you are managing</h2>
                <div className="flex justify-between">
                    {data.map((item) => (
                        <Card className="w-[250px] h-[100px]" key={item.name}>
                            <div className="flex justify-between">
                                <div>
                                    <item.icon
                                        className={`bg-${item.color}  text-white  p-2 rounded-[20px]`}
                                        size={55}
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <h2 className="font-bold text-2xl">{item.count}</h2>
                                    <p className="text-base capitalize text-gray-600">
                                        {item.name}
                                    </p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Actions */}
            <Card className="mt-10 h-72">
                <h2 className="py-2 text-xl ">Quick Actions</h2>
                <div className="flex  gap-4">
                    <button class="px-10 py-8  border-2 border-dashed border-black rounded flex flex-col items-center gap-2 ">
                        <Plus className="border  p-2" size={40} />
                        Create Venue
                    </button>

                    <button class="px-10 py-8  border-2 border-dashed border-black rounded flex flex-col items-center gap-2 ">
                        <Plus className="border  p-2" size={40} />
                        Create Event
                    </button>
                </div>
            </Card>
        </div>
    );
};

export default Events;
