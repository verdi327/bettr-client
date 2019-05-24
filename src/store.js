const Workouts = {
  list: [
    {
      id: 1,
      day: 1,
      type: 'weights',
      sub_type: 'power',
      completed: false
    },
    {
      id: 2,
      day: 2,
      type: 'cardio',
      sub_type: 'endurance',
      completed: false
    },
    {
      id: 3,
      day: 3,
      type: 'weights',
      sub_type: 'strength',
      completed: false
    },
    {
      id: 4,
      day: 4,
      type: 'cardio',
      sub_type: 'recovery',
      completed: false
    },
    {
      id: 5,
      day: 5,
      type: 'weights',
      sub_type: 'volume',
      completed: false
    },
    {
      id: 6,
      day: 6,
      type: 'hybrid',
      sub_type: 'intensity',
      completed: false
    },
    {
      id: 7,
      day: 7,
      type: 'rest',
      sub_type: '',
      completed: true
    }
  ],
  detailed: [
    {
      id: 1,
      day: 1,
      type: 'weights',
      sub_type: 'power',
      completed: false,
      warm_up: 'Spend at least 10 minutes to warm up properly. Start with myofacial work (foam roller, lax ball etc.) followed by light calistenics or animal flow movements. You should break a slight sweat. Finally, do a few light sets of the movements you will be completing in the main workout block.',
      main: ['Reverse Med Ball Throws'],
      main_sets: '7-10',
      main_rest: 'as needed',
      main_reps: '2-3',
      acc: ['Goblet Squat', 'Dumbbell Bench Press', 'Double KB Snatch'],
      acc_sets: '3-4',
      acc_reps: '10-15',
      acc_rest: '1-2 minutes',
      focus: "The goal for today is building power. Power development is best achieved when you're able to maximally contract your muscles to quickly move a load. Focus on high quality reps where you allow yourself plenty of rest between sets. Loading should be medium to medium-light."
    },
    {
      id: 2,
      day: 2,
      type: 'cardio',
      sub_type: 'endurance',
      completed: false,
      warm_up: 'Start with myofacial work (foam roller, lax ball etc.) followed by light calistenics or animal flow movements. Then pick whatever cardio movement you intend to do and spend at least 5 minutes gradually increasing your heart rate. You should break a sweat.',
      main: 'Pick a cardio movement(s) like running, rowing or biking. Your goal is to work for 30-60 minutes continuously at 70-80% effort. You can combine movements into a circuit fashion or pick a single movement.',
      focus: "The goal for today is building cardio endurance. Endurance is built by gradually increasing how long you can continuously move. Importantly, you don't want to push too hard, rather stay in the 70-80% effort range to build the correct aerobic adaptations.  Long and strong should be your mantra."
    },
    {
      id: 3,
      day: 3,
      type: 'weights',
      sub_type: 'strength',
      completed: false,
      warm_up: 'Spend at least 10 minutes to warm up properly. Start with myofacial work (foam roller, lax ball etc.) followed by light calistenics or animal flow movements. You should break a slight sweat. Finally, do a few sets building in weight of the movements you will be completing in the main workout block.',
      main: ['Barbell Sumo Deadlift', 'Barbell Overhead Press'],
      main_sets: '4-5',
      main_rest: '3-4 minutes',
      main_reps: '5-6',
      acc: ['Dumbbell Thruster', 'Farmer\'s Carry'],
      acc_sets: '3-4',
      acc_reps: '10-15',
      acc_rest: '1-2 minutes',
      focus: "The goal for today is building strength. Strength development occurs best when ample rest is given to allow for heavier loads lifted. Importantly, even though you're lifting heavier, always leave 2-3 reps in the tank. You should never have a missed rep!"
    },
    {
      id: 4,
      day: 4,
      type: 'cardio',
      sub_type: 'recovery',
      completed: false,
      warm_up: 'Spend as long as you need to get yourself ready, today is a bounce back day. Start with myofacial work (foam roller, lax ball etc.) followed by light calistenics or animal flow movements. Then, do some easy accessory work on known weak body parts.',
      main: 'Pick a cardio movement(s) like running, rowing or biking. Your goal is to work for 30-60 minutes continuously at 50-65% effort. You can combine movements into a circuit fashion or pick a single movement.',
      focus: "The goal for today is recovery. You should leave the session feeling better than when you started. If you're sore from a previous day's movement, do a few sets of 10 at very light weight to help reduce soreness. For example, 2 x 10 Barbell Back Squats with an empty bar if sore from squatting."
    },
    {
      id: 5,
      day: 5,
      type: 'weights',
      sub_type: 'volume',
      completed: false,
      warm_up: 'Spend at least 10 minutes to warm up properly. Start with myofacial work (foam roller, lax ball etc.) followed by light calistenics or animal flow movements. You should break a slight sweat. Finally, do a few sets building in weight of the movements you will be completing in the main workout block.',
      main: ['Pause Barbell Front Squats', 'Pronated Pull-Ups'],
      main_sets: '3-4',
      main_rest: '1-2 minutes',
      main_reps: '10-15',
      acc: ['Single Leg Kettlebell Deadlift', 'Dumbbell Floor Press', 'Toes to Bar'],
      acc_sets: '3-4',
      acc_reps: '10-15',
      acc_rest: '1-2 minutes',
      focus: "The goal for today is building volume. Volume training is like traditional body building where the goal is to increase the overall size of the muscle. The key to mass gaining is to lift slightly heavier and heavier load in less and less time. So, before increasing the weight try either increasing the reps or decreasing the amount of rest. And remember, you should never miss a rep, always leave some in the tank!"
    },
    {
      id: 6,
      day: 6,
      type: 'hybrid',
      sub_type: 'intensity',
      completed: false,
      warm_up: 'Spend at least 15-20 minutes to warm up properly. Start with myofacial work (foam roller, lax ball etc.) followed by light calistenics or animal flow movements. You should break a slight sweat. Finally, do a practice round of the movements in the main block but with lighter loads.',
      main: "Pronated Pull-Up, build to a heavy set of 3, ,rest as needed, ,For Time,10 Dumbbell Overhead Lunges,12 Toes to Bar,400m Run,x 3 rounds ",
      focus: "The goal for today is building intensity. Intensity means completing the most amount of work you can do in the shortest amount of time. These workouts are hard by design and you will be tested.  Try not to hit muscle failure at any one time as the goal is to always be moving.  And remember, it's good to push yourself, but not to the point of injury - be smart!"
    },
    {
      id: 7,
      day: 7,
      type: 'rest',
      sub_type: '',
      completed: true,
      focus: "The goal for today is recovery. Eat, sleep and be well. Spend time doing things you like. If you're body feels good, pick up sports are a great option to move your body and engage with others."
    }
  ]
  
}

export default Workouts