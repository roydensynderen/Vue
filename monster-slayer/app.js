new Vue({
    el: '#app',
    data: {
        playerHp: 100,
        monsterHp: 100,
        gameIsRunning: false,
        turns: []
    },
    methods: {
        startGame: function() {
            this.gameIsRunning = true;
            this.playerHp = 100;
            this.monsterHp = 100;
            this.turns = [];
        },
        attack: function() {
            var damage = this.calculateDamage(3, 10);
            this.monsterHp -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits Monster for ' + damage 
            })
            if (this.checkWin()) {
                return;
            }
            this.monsterAtk();
        },
        specialAttack: function() {
            var damage = this.calculateDamage(10, 20);
            this.monsterHp -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits Monster hard for ' + damage 
            });
            if (this.checkWin()) {
                return;
            }
            this.monsterAtk();
        },
        heal: function() {
            if (this.playerHp <= 90) {
                this.playerHp += 10;
            } else {
                this.playerHp = 100;
            }
            this.turns.unshift({
                isPlayer: true,
                text: 'Player heals for 10' 
            });
            this.monsterAtk();
        },
        giveUp: function() {
            this.gameIsRunning = false;

        },
        monsterAtk: function() {
            var damage = this.calculateDamage(5, 12);
            this.playerHp -= damage;
            this.checkWin();
            this.turns.unshift({
                isPlayer: false,
                text: 'Monster hits Player for ' + damage 
            })
        },
        calculateDamage: function(minDmg, maxDmg) {
            return Math.max(Math.floor(Math.random() * maxDmg) + 1, minDmg);
        },
        checkWin: function() {
            if (this.monsterHp <= 0) {
                if (confirm('You Won! New Game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            } else if (this.playerHp <= 0) {
                if (confirm('You Lost! New Game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            }
            return false;
        }
    }
});