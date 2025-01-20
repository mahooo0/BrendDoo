import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import UserAside from '../../components/userAside';
import GETRequest, { axiosInstance } from '../../setting/Request';
import type { Notification } from '../../setting/Types';
import Loading from '../../components/Loading';
import NotificationPop from '../../components/NotificationPopUp';
import { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';

export default function Notification() {
    const { lang = 'ru' } = useParams<{
        lang: string;
    }>();
    const [isPopOpen, setIsPopOpen] = useState(false);
    const [NotificationId, setNotificationId] = useState(0);
    const { data: notifications, isLoading: NotificationsLoading } = GETRequest<
        Notification[]
    >(`/notifications`, 'notifications', [lang]);
    const queryClient = useQueryClient();
    if (NotificationsLoading) {
        <Loading />;
    }

    return (
        <div>
            <Header />
            <div className="" />
            <main className="flex max-sm:flex-col flex-row w-full gap-5 p-4">
                <UserAside active={3} />
                <div className="w-full rounded-[20px] bg-[#F8F8F8] lg:p-[40px] px-4 py-10">
                    <h1 className="text-[28px] font-semibold mb-[40px]">
                        Bəyəndiklərim
                    </h1>
                    <div className="flex flex-col  gap-3">
                        {notifications?.map((item) => {
                            if (!item.is_read) {
                                return (
                                    <div
                                        className="flex overflow-hidden flex-wrap gap-5 justify-between px-6 py-6 w-full bg-white rounded-3xl border border-blue-100 border-solid max-md:pr-5 max-md:max-w-full"
                                        onClick={async () => {
                                            setIsPopOpen(true);
                                            setNotificationId(item.id);
                                            const userStr =
                                                localStorage.getItem(
                                                    'user-info'
                                                );
                                            if (userStr) {
                                                const User =
                                                    JSON.parse(userStr);
                                                await axiosInstance
                                                    .put(
                                                        '/read/notification',
                                                        {
                                                            notification_id:
                                                                item.id,
                                                            is_read: true,
                                                        },
                                                        {
                                                            headers: {
                                                                Authorization: `Bearer ${User.data.token}`,
                                                                Accept: 'application/json',
                                                            },
                                                        }
                                                    )
                                                    .then(() => {
                                                        queryClient.invalidateQueries(
                                                            {
                                                                queryKey: [
                                                                    'notifications',
                                                                ],
                                                            }
                                                        );
                                                    });
                                            }
                                        }}
                                    >
                                        <div className="flex flex-col max-md:max-w-full">
                                            <div className="text-base font-medium text-sky-400 max-md:max-w-full">
                                                {item.title}
                                            </div>
                                            <div className="mt-2 text-sm text-black text-opacity-80 max-md:max-w-full">
                                                {item.body}
                                            </div>
                                        </div>
                                        <div className="flex shrink-0 my-auto w-3 h-3 bg-rose-600 rounded-[100px]" />
                                    </div>
                                );
                            } else {
                                return (
                                    <div
                                        className="flex overflow-hidden flex-col justify-center items-start px-5 py-6 mt-3 w-full rounded-3xl border border-solid bg-stone-50 border-black border-opacity-10 max-md:max-w-full"
                                        onClick={() => {
                                            setIsPopOpen(true);
                                            setNotificationId(item.id);
                                        }}
                                    >
                                        <div className="flex flex-col max-md:max-w-full">
                                            <div className="text-base font-medium text-black max-md:max-w-full">
                                                {item.title}
                                            </div>
                                            <div className="mt-2 text-sm text-black text-opacity-80 max-md:max-w-full">
                                                {item.body}
                                            </div>
                                        </div>
                                    </div>
                                );
                            }
                        })}
                        {/* <div className="flex overflow-hidden flex-wrap gap-5 justify-between px-6 py-6 w-full bg-white rounded-3xl border border-blue-100 border-solid max-md:pr-5 max-md:max-w-full">
                            <div className="flex flex-col max-md:max-w-full">
                                <div className="text-base font-medium text-sky-400 max-md:max-w-full">
                                    Yarışa qatılmağı unutma!
                                </div>
                                <div className="mt-2 text-sm text-black text-opacity-80 max-md:max-w-full">
                                    Qatıldının “Baku Run Yarışı” sabah 12:00-da
                                    Bulvar parkında keçiriləcək.
                                </div>
                            </div>
                            <div className="flex shrink-0 my-auto w-3 h-3 bg-rose-600 rounded-[100px]" />
                        </div> */}
                    </div>
                </div>
                {/* <div className="w-full !h-[100%] hidden fixed  top-[0] left-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
                    <div className="flex overflow-hidden flex-col justify-center p-10 bg-white rounded-3xl max-w-[520px] max-md:px-5 relative">
                        <div className="flex flex-col max-md:max-w-full">
                            <div className="text-xl font-semibold text-black max-md:max-w-full">
                                Bildirişin adı
                            </div>
                            <div className="mt-5 text-base text-black text-opacity-80 max-md:max-w-full">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book. It has survived
                                <br />
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book. It has survived
                            </div>
                        </div>
                        <div className="w-[48px] h-[48px] rounded-full bg-[#F5F5F5] flex  justify-center items-center absolute top-4 right-4">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clip-path="url(#clip0_185_5719)">
                                    <path
                                        d="M18 6L6 18"
                                        stroke="black"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M6 6L18 18"
                                        stroke="black"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_185_5719">
                                        <rect
                                            width="24"
                                            height="24"
                                            fill="white"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div> */}
                <NotificationPop
                    isOpen={isPopOpen}
                    onClose={() => {
                        setIsPopOpen(false);
                    }}
                    title={
                        notifications?.find(
                            (item) => item.id === NotificationId
                        )?.title || ''
                    }
                    description={
                        notifications?.find(
                            (item) => item.id === NotificationId
                        )?.body || ''
                    }
                />
            </main>
        </div>
    );
}
