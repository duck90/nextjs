import { 
  UserOutlined, 
  ScheduleOutlined,
  FileTextOutlined,
  ShopOutlined,
  WalletOutlined,
} from '@ant-design/icons';

const manageNavTree = [
  {
    key: 'manage',
    title: '어드민 관리',
    breadcrumb: true,
    submenu: [
      {
        key: 'manage-member',
        title: '회원관리',
        icon: UserOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: 'normal-member',
            path: `/normal-member`,
            title: '일반회원',
            icon: '',
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'center-member',
            path: `/center-member`,
            title: '센터회원',
            icon: '',
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'school-member',
            path: `/school-member`,
            title: '학교회원',
            icon: '',
            breadcrumb: false,
            submenu: []
          },
        ]
      },
      {
        key: 'manage-measure',
        title: '측정관리',
        icon: FileTextOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: 'measure-brain',
            path: '/measure-brain',
            title: '뇌기능 측정',
            icon: '',
            breadcrumb: true,
            submenu: []
          },
          {
            key: 'inspect-brain',
            path: '/inspect-brain',
            title: '뇌기능 검사',
            icon: '',
            breadcrumb: true,
            submenu: []
          },
        ]
      },
      {
        key: 'counsel-schedule',
        title: '상담일정',
        icon: ScheduleOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: 'counsel-list',
            path: '/counsel-list',
            title: '상담 목록',
            icon: '',
            breadcrumb: true,
            submenu: []
          },
          {
            key: 'counsel-reservation',
            path: '/counsel-reservation',
            title: '상담 예약일',
            icon: '',
            breadcrumb: true,
            submenu: []
          },
        ]
      },
      {
        key: 'manage-branch',
        title: '센터&학교 관리',
        icon: ShopOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: 'manage-center',
            path: '/manage-center',
            title: '센터 관리',
            icon: '',
            breadcrumb: true,
            submenu: []
          },
          {
            key: 'manage-school',
            path: '/manage-school',
            title: '학교 관리',
            icon: '',
            breadcrumb: true,
            submenu: []
          },
        ]
      },
      {
        key: 'manage-payment',
        title: '결제관리',
        icon: WalletOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: 'present-payment',
            path: '/present-payment',
            title: '결제현황',
            icon: '',
            breadcrumb: true,
            submenu: []
          },
          {
            key: 'deposit',
            path: '/present-payment',
            title: '무통장입금',
            icon: '',
            breadcrumb: true,
            submenu: []
          },
          {
            key: 'cencel-refund',
            path: '/cencel-refund',
            title: '취소/환불처리',
            icon: '',
            breadcrumb: true,
            submenu: []
          },
        ]
      },
    ]
  }
]

export default manageNavTree;
