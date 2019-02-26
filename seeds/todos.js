exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("todos")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("todos").insert([
        {
          id: 1,
          task: "coding",
          priority: 1,
          category: "work",
          is_complete: "true",
          due_at: "1551057598415"
        },
        {
          id: 2,
          task: "testing",
          priority: 2,
          category: "work",
          is_complete: "false",
          due_at: "1551057624462"
        },
        {
          id: 3,
          task: "buying foods",
          priority: 3,
          category: "home",
          is_complete: "false",
          due_at: "1551057661108"
        },
        {
          id: 4,
          task: "cooking",
          priority: 4,
          category: "home",
          is_complete: "false",
          due_at: "1551057683143"
        },
        {
          id: 5,
          task: "cleaning",
          priority: 5,
          category: "home",
          is_complete: "false",
          due_at: "1551057696117"
        }
      ]);
    });
};
