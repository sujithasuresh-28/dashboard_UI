import menuicon1 from '../assets/menuicon1.png';
import menuicon2 from '../assets/menuicon2.png';
import menuicon3 from '../assets/menuicon3.png';
import menuicon4 from '../assets/menuicon4.png';
import menuicon5 from '../assets/menuicon5.png';
import message from '../assets/message.png';
import settings from '../assets/settings.png';
import notifications from '../assets/notification.png';
import ordercard from '../assets/order-card.png';
import deliveredcard from '../assets/delivered-card.png';
import canceledcard from '../assets/canceled-card.png';
import revenuecard from '../assets/revenue-card.png';
import wadewarren from '../assets/wade-warren.png';
import janecooper from '../assets/jane-cooper.png';
import guyhawkins from '../assets/guy-hawkins.png';
import kristinwatson from '../assets/kristin-watson.png';
import codyfisher from '../assets/cody-fisher.png';
import savannahnuyguen from '../assets/savannah-nguyen.png';
import goals from '../assets/goals.png';
import populardishes from '../assets/popular-dishes.png';
import jennywilson from '../assets/jenney-wilson.png';
import diannerusell from '../assets/dannee-rusell.png';
import devonlane from '../assets/devon-lane.png';
import menus from '../assets/menus.png';
import avatar from '../assets/avatar.png';
import { getDeviceType } from '../context/DeviceTypeContext';

const { isMobile, isMiniDesktop } = getDeviceType();

export const menuItems = [
    {
        id: 'menuicon1',
        icon: menuicon2,
        active: true,
    },
    {
        id: 'menuicon2',
        icon: menuicon1,
        active: false,
    },
    {
        id: 'menuicon3',
        icon: menuicon3,
        active: false,
    },
    {
        id: 'menuicon4',
        icon: menuicon4,
        active: false,
    },
    {
        id: 'menuicon5',
        icon: menuicon5,
        active: false
    }
]

export const topNavItems = [
    {
        id: 'message',
        icon: message,
    },
    {
        id: 'settings',
        icon: settings,
    },
    {
        id: 'notifications',
        icon: notifications,
    },
    {
        id: 'avatar',
        icon: avatar,
    },
]

export const sectionCards = [
    {
        name: 'Total Orders',
        count: '75',
        percentageColor: '#09c322',
        percentage: '3%',
        icon: ordercard
    },
    {
        name: 'Total Delivered',
        count: '70',
        percentageColor: 'red',
        percentage: '3%',
        icon: deliveredcard
    },
    {
        name: 'Total Cancelled',
        count: '05',
        percentageColor: '#09c322',
        percentage: '3%',
        icon: canceledcard
    },
    {
        name: 'Total Revenue',
        count: '$12k',
        percentageColor: 'red',
        percentage: '3%',
        icon: revenuecard
    }
]

export const barChartOptions = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: false,
        },
        tooltip: {
            enabled: false,
        },
    },
    layout: {
        padding: {
            left: isMobile ? 5 : isMiniDesktop ? 5 : 10,
            right: isMobile ? 5 : isMiniDesktop ? 5 : 20,
            top: isMobile ? 5 : 20,
            bottom: isMobile ? 5 : 10,
        },
    },
    scales: {
        y: {
            beginAtZero: true,
            max: 10,
            ticks: {
                maxTicksLimit: 3,
                color: '#fff',
                font: {
                    size: 12,
                },
            },
            grid: {
                color: 'rgba(255, 255, 255, 0.2)',
            },
        },
        x: {
            ticks: {
                maxTicksLimit: isMobile ? 9 : 15,
                color: '#fff',
                font: {
                    size: 12,
                },
            },
        },
    },
};

export const recentOrdersTableHead = [
    'Customer',
    'Order No',
    'Amount',
    'Status'
]

export const recentOrdersTableBody = [
    {
        name: 'Wade Warren',
        img: wadewarren,
        orderNo: '15478256',
        amount: '$124.00',
        status: 'Delivered'
    },
    {
        name: 'Jane Cooper',
        img: janecooper,
        orderNo: '48965786',
        amount: '$365.02',
        status: 'Delivered'
    },
    {
        name: 'Guy Hawkins',
        img: guyhawkins,
        orderNo: '78958215',
        amount: '$45.88',
        status: 'Cancelled'
    },
    {
        name: 'Kristin Watson',
        img: kristinwatson,
        orderNo: '20965732',
        amount: '$65.00',
        status: 'Pending'
    },
    {
        name: 'Cody Fisher',
        img: codyfisher,
        orderNo: '95715620',
        amount: '$545.00',
        status: 'Delivered'
    },
    {
        name: 'Savannah Nguyen',
        img: savannahnuyguen,
        orderNo: '78514568',
        amount: '$128.20',
        status: 'Delivered'
    }
]

export const hotelList = [
    {
        name: 'Goals',
        icon: goals,
    },
    {
        name: 'Popular Dishes',
        icon: populardishes
    },
    {
        name: 'Menus',
        icon: menus
    }
]

export const customersFeedback = [
    {
        name: 'Jenny Wilson',
        icon: jennywilson,
        rating: 4,
        comments: 'The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.'
    },
    {
        name: 'Dianne Russell',
        icon: diannerusell,
        rating: 5,
        comments: 'We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect Service.'
    },
    {
        name: 'Devon Lane',
        icon: devonlane,
        rating: 4,
        comments: 'Normally wings are wings, but theirs are lean meaty and tender and very delicious to eat. Perfect service. Overall very good.'
    },
]