const { createApp } = Vue;

createApp({
    data() {
        return {
            currentDay: 1,
            activeTab: 'bus',
            completedQuests: [],
            showInfo: false,
            showMessage: false,
            questData: {
                1: [
                    {
                        icon: 'flight_land',
                        name: 'Ter: Pleiku → Hanoi',
                        time: '09:30-11:30',
                        desc: 'Ter sẽ bay từ Pleiku đến Hà Nội. Chắc sẽ nôn lắm!'
                    },
                    {
                        icon: 'directions_bus',
                        name: 'Ter: Hanoi → Việt Trì',
                        time: '12:30',
                        desc: 'Ter di chuyển từ Hà Nội lên Việt Trì bằng xe khách. Chuẩn bị gặp Kỳ!'
                    },
                    {
                        icon: 'hotel',
                        name: 'Ter: Check-in',
                        time: '14:00-15:00',
                        desc: 'Ter check-in homestay, nhớ nhắc tớ thuê xe nha!'
                    },
                    {
                        icon: 'local_cafe',
                        name: 'Cafe & Xem Phim',
                        time: '15:00-19:00',
                        desc: 'Ôm một cái nhé!'
                    },
                    {
                        icon: 'outdoor_grill',
                        name: 'Đồ Nướng!!!',
                        time: '19:00',
                        desc: 'Chúng ta đều thích đồ nướng! Quán nướng tên gì nhỉ, dẫn đi quán nào ngon nhé, không cần sang chảnh đâu!'
                    },
                    {
                        icon: 'pets',
                        name: 'Cầu Vàng',
                        time: '∞:∞',
                        desc: 'Ter thích đi dạo bộ, chiều bạn nhé. Xem có gì ăn vặt hấp dẫn không'
                    },
                    {
                        icon: 'night_shelter',
                        name: 'Ter đưa Kỳ về',
                        time: '∞:∞',
                        desc: 'Quest là phải đưa Kỳ về nhà an toàn!'
                    }
                ],
                2: [
                    {
                        icon: 'two_wheeler',
                        name: 'Ter đón bạn Kỳ',
                        time: '07:00-08:00',
                        desc: 'Không biết rủ bạn Kỳ đi suốt ngày như vậy, có bị phụ huynh la không nữa. Nhưng mà nhớ cho ôm cái!'
                    },
                    {
                        icon: 'ramen_dining',
                        name: 'Ăn Sáng',
                        time: 'Sáng',
                        desc: 'Bún chả mọc, bún cá cay, bún tổng hợp, bánh cuốn... ăn 2 món nổi không nhỉ!'
                    },
                    {
                        icon: 'temple_buddhist',
                        name: 'Đền Hùng',
                        time: '09:00-11:00',
                        desc: 'Ter là người thích tìm hiểu lịch sử, hướng dẫn bạn ấy nhé!'
                    },
                    {
                        icon: 'soup_kitchen',
                        name: 'Ăn trưa',
                        time: '12:00',
                        desc: 'Lẩu riêu cua đồng - Quán lẩu 19. Đặc sản Việt Trì! (Kỳ không thích lẩu nên gọi món khác nhé)'
                    },
                    {
                        icon: 'celebration',
                        name: 'Undefined',
                        time: 'Chiều-Tối',
                        desc: 'Chưa tính chiều tối làm gì nữa, để xem Việt Trì có gì chơi, con người có nhẹ nhàng không!'
                    },
                    {
                        icon: 'night_shelter',
                        name: 'Ter đưa Kỳ về',
                        time: '∞:∞',
                        desc: 'Quest quan trọng là phải đưa Kỳ về an toàn!'
                    }
                ],
                3: [
                    {
                        icon: 'wb_twilight',
                        name: 'Ter: Sáng Sớm',
                        time: '06:00',
                        desc: 'Chuẩn bị tạm biệt thôi...'
                    },
                    {
                        icon: 'directions_bus',
                        name: 'Ter: về Hanoi',
                        time: '07:00-08:30',
                        desc: 'Sợ nhất khúc này, bắt nhầm xe cái trễ bay luôn'
                    },
                    {
                        icon: 'flight_takeoff',
                        name: 'Ter: Hanoi → TP.HCM',
                        time: '10:50-13:00',
                        desc: 'Ter bay từ Hà Nội về TP.HCM. Chắc sẽ nhớ bạn lắm!'
                    }
                ]
            },
            travelInfo: {
                bus: {
                    name: 'Nhà xe Thủy Chính',
                    hotline: ['0982 588 333', '0983 588 333'],
                    hanoi_to_phutho: [
                        { time: '12h30\'', phone: '0948224666', note: 'Phù hợp sau bay 11h30 đến HN' },
                        { time: '15h10\'', phone: '0948262444' },
                        { time: '16h00\'', phone: '0948282444' }
                    ],
                    phutho_to_hanoi: [
                        { time: '6h05\'', phone: '0943121999', note: 'Kịp bay 10h50' },
                        { time: '6h35\'', phone: '0943121555' },
                        { time: '7h00\'', phone: '0948224666' }
                    ]
                },
                homestay: {
                    name: 'Trạm Homestay',
                    phone: '0396531412',
                    address: '53 Tiên Dung, Ph.Tiên Cát, Việt Trì, Phú Thọ',
                    mapUrl: 'https://www.google.com/maps/place/Tr%E1%BA%A1m+-+Ngh%E1%BB%89+d%C6%B0%E1%BB%A1ng+gi%E1%BB%AFa+l%C3%B2ng+%C4%90%E1%BA%A5t+T%E1%BB%95/@21.3075077,105.407162,18z/data=!4m15!1m8!3m7!1s0x3134f2b4d957f6a1:0x404dd1811208dd14!2zNTMgVGnDqm4gRHVuZywgUGguVGnDqm4gQ8OhdCwgVmnhu4d0IFRyw6wsIFBow7ogVGjhu40sIFZpZXRuYW0!3b1!8m2!3d21.3075802!4d105.4078486!16s%2Fg%2F11k2y84wgb!3m5!1s0x3134f300553668df:0xa0b65d7546134915!8m2!3d21.307546!4d105.4079354!16s%2Fg%2F11y07f4shm?entry=ttu&g_ep=EgoyMDI2MDEwNy4wIKXMDSoASAFQAw%3D%3D',
                    image: '/assets/images/tram-homestay.jpg'
                },
                bikeRental: [
                    {
                        name: 'Trường Thảo',
                        phone: '0979884812',
                        address: 'Tổ 50, khu Liên Phương, TP Việt Trì, Phú Thọ',
                        price: '140k - 150k/ngày'
                    },
                    {
                        name: 'Đại An',
                        phone: '0975113368',
                        address: '36 đường Nguyễn Du, phường Nông Trang, Tp Việt Trì',
                        price: '130k – 140k/ngày'
                    },
                    {
                        name: 'Thủy Hùng ',
                        phone: '0368864555',
                        address: '44 Đại Lộ Hùng Vương, Phường Thanh Miếu, Tp Việt Trì',
                        price: '150k/ngày'
                    }
                ]
            },

            countdownExpanded: false, // thêm dòng này
            targetDate: new Date('2026-02-19T15:00:00'),
            countdown: {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
                isPast: false
            },
            countdownInterval: null
        };
    },
    computed: {
        currentQuests() {
            return this.questData[this.currentDay] || [];
        },
        progressWidth() {
            return (this.currentDay / 3) * 100;
        },
        countdownText() {
            if (this.countdown.isPast) {
                return '☕💕';
            }
            return `${this.countdown.days} ngày ${this.countdown.hours} giờ ${this.countdown.minutes} phút ${this.countdown.seconds} giây`;
        }
    },

    mounted() {
        this.startCountdown();
    },
    beforeUnmount() {
        if (this.countdownInterval) {
            clearInterval(this.countdownInterval);
        }
    },
    methods: {
        startCountdown() {
            this.updateCountdown();
            this.countdownInterval = setInterval(() => {
                this.updateCountdown();
            }, 1000);
        },

        updateCountdown() {
            const now = new Date().getTime();
            const target = this.targetDate.getTime();
            const distance = target - now;

            if (distance < 0) {
                this.countdown.isPast = true;
                if (this.countdownInterval) {
                    clearInterval(this.countdownInterval);
                }
                return;
            }

            this.countdown.days = Math.floor(distance / (1000 * 60 * 60 * 24));
            this.countdown.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            this.countdown.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            this.countdown.seconds = Math.floor((distance % (1000 * 60)) / 1000);
        },
        getTabIcon(tab) {
            const icons = {
                bus: 'directions_bus',
                homestay: 'hotel',
                bike: 'two_wheeler',
            };
            return icons[tab];
        },

        getTabLabel(tab) {
            const labels = {
                bus: 'Xe Khách',
                homestay: 'Homestay',
                bike: 'Thuê Xe Máy',
            };
            return labels[tab];
        },

        switchDay(day) {
            this.currentDay = day;
        },
        getDayLabel(day) {
            const labels = ['19/02', '20/02', '21/02'];
            return labels[day - 1];
        },
        markComplete(index) {
            const questId = `${this.currentDay}-${index}`;
            if (!this.completedQuests.includes(questId)) {
                this.completedQuests.push(questId);
            }
        },
        isCompleted(index) {
            const questId = `${this.currentDay}-${index}`;
            return this.completedQuests.includes(questId);
        },
        toggleInfo() {
            this.showInfo = !this.showInfo;
        },
        toggleShowMessage() {
            this.showMessage = !this.showMessage
        },
    }
}).mount('#app');