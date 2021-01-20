// Used foodtrucks schema as a template

exports.up = function(knex) {
    return knex.schema.createTable('jobs', jobs => {
        jobs.increments();

        jobs
            .string('jobTitle', 128)
            .notNullable()
            .unique();
        jobs
            .string('location', 128)
            .notNullable();
        jobs
            .string('jobDescription', 500)
            .notNullable();
        jobs
            .string('owner', 128)
            .notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('jobs');
};