const Gender = {
    male: 'male',
    female: 'female',
    values: function() {
        return [this.male, this.female];
    }
};

for (const i of Gender.values()) {
    console.log(i);
}