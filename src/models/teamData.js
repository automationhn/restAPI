const teams = [
  {
    name: 'Salad',
    id: 4,
    dev_lead: 'Hao Sua',
    dev_lead_address: {
      number: '179',
      street: 'Binh Hung',
      district: 'Binh Thanh',
      city: 'HCM',
    },
    qa_lead: 'Cuc Doan',
    qa_lead_address: {
      number: '106/258',
      street: 'CMT8',
      district: 3,
      city: 'HCM',
    },
    members: ['Hanh', 'Nhat', 'Minh', 'Thoai', 'Thao MN', 'Hien', 'Tai', 'Tin', 'T. Anh', 'H. Anh'],
  },
  {
    name: 'Hotpot',
    id: 5,
    dev_lead: 'Phong Lan',
    dev_lead_address: {
      number: '33/34',
      street: 'Ho Tu Ki',
      district: 10,
      city: 'HCM',
    },
    qa_lead: 'Y Huynh',
    qa_lead_address: {
      number: '69/619',
      street: 'Cong Hoa',
      district: 'Tan Binh',
      city: 'HCM',
    },
    members: ['Toan', 'An', 'Lan', 'Anh', 'Tri', 'Quoc'],
  },
  {
    name: 'Cash',
    id: 1,
    dev_lead: 'Hieu Mai',
    dev_lead_address: {
      number: '11/4',
      street: 'CMT8',
      district: 3,
      city: 'HCM',
    },
    qa_lead: 'Thuy Le',
    qa_lead_address: {
      number: '45/334',
      street: 'Le Thuc Hoach',
      district: 'Tan Phu',
      city: 'Binh Dinh',
    },
    members: ['Trung', 'Hue', 'Quynh', 'Thai', 'Thuong', 'Vy'],
  },
  {
    name: 'SM',
    id: 69,
    dev_lead: 'Mai Le',
    dev_lead_address: {
      number: '69',
      street: 'Biet Thu',
      district: 7,
      city: 'HCM',
    },
    qa_lead: 'C3',
    qa_lead_address: {
      number: '258',
      street: 'Hoang Sa',
      district: '1',
      city: 'Binh Duong',
    },
    members: ['Chanh', 'Cuong', 'Hao Hach'],
  },
  {
    name: 'Yogurt',
    id: 2,
    dev_lead: 'Van Nguyen',
    dev_lead_address: {
      number: '19',
      street: 'CMT8',
      district: 3,
      city: 'HCM',
    },
    qa_lead: 'Ha Sach Se',
    qa_lead_address: {
      number: '999',
      street: 'San Bay',
      district: 'Orchest Garden',
      city: 'Binh Dinh',
    },
    members: ['Yen', 'Long', 'Tuan', 'Phuc', 'Hong', 'Cuong'],
  },
  {
    name: 'Ketchup',
    id: 3,
    dev_lead: 'Thanh Luu',
    dev_lead_address: {
      number: '19',
      street: 'CMT8',
      district: 3,
      city: 'HCM',
    },
    qa_lead: 'Thu Duc',
    qa_lead_address: {
      number: '696',
      street: 'San Ong',
      district: 'Binh Tan',
      city: 'Binh Duong',
    },
    members: ['Duc', 'Long Big', 'Dung', 'Tran Anh', 'Vu'],
  },
];

const scrum_master_by_team = [
  {
    id: 1,
    team_id: 4,
    sm: 'Cuong',
  },
  {
    id: 2,
    team_id: 5,
    sm: 'Chanh',
  },
  {
    id: 3,
    team_id: 1,
    sm: 'Hao Hach',
  },
  {
    id: 4,
    team_id: 2,
    sm: 'Chanh',
  },
  {
    id: 5,
    team_id: 3,
    sm: 'Gioan',
  },
];

const features = [
  {
    id: 1,
    name: 'Accumulation',
    team_ids: [5, 4, 2],
    points: 8,
  },
  {
    id: 2,
    name: 'Vendor',
    team_ids: [4, 3, 1],
    points: 3,
  },
  {
    id: 3,
    name: 'Cash drawer',
    team_ids: [1],
    points: 5,
  },
  {
    id: 4,
    name: 'Transfer',
    team_ids: [5, 4, 1],
    points: 5,
  },
  {
    id: 5,
    name: 'GL Report',
    team_ids: [5, 2],
    points: 2,
  },
  {
    id: 6,
    name: 'Backdating',
    team_ids: [4, 5],
    points: 13,
  },
];

const velocities = [
  {
    id: 'v_0001',
    name: "Sprint 0",
    sprint_number: 0,
    teams: [
      {
        team_id: 1,
        points: 13
      },
      {
        team_id: 2,
        points: 13
      },
      {
        team_id: 3,
        points: 11
      }
    ]
  },
  {
    id: 'v_0002',
    name: "Sprint 1",
    sprint_number: 1,
    teams: [
      {
        team_id: 1,
        points: 14
      },
      {
        team_id: 2,
        points: 15
      },
      {
        team_id: 3,
        points: 12
      },
      {
        team_id: 4,
        points: 8
      }
    ]
  },
  {
    id: 'v_0003',
    name: "Sprint 2",
    sprint_number: 2,
    teams: [
      {
        team_id: 2,
        points: 18
      },
      {
        team_id: 3,
        points: 15
      },
      {
        team_id: 4,
        points: 15
      },
      {
        team_id: 5,
        points: 5
      }
    ]
  },
];

export {
  teams,
  scrum_master_by_team,
  features,
  velocities
};
